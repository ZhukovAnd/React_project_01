import { userAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let init_state = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true, // крутилка
  followingProgress: [] // блокировка кнопки "подписка"
}

const usersReducer = (state = init_state, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state, users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state, users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id !== action.userId)
      }
    }
    default: return state
  }
}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, count: totalUsersCount })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgressAC = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    userAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsFetchingAC(false));
        dispatch(setCurrentPageAC(currentPage))
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount))
        
      });
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userId));
    userAPI.followUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followAC(userId))
        }
        dispatch(toggleFollowingProgressAC(false, userId));
      });
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userId));
    userAPI.unfollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowAC(userId))
        }
        dispatch(toggleFollowingProgressAC(false, userId))
      });
  }
}


export default usersReducer;