import React from "react";
import style from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {//выводим из пропсов инрут и мету
   
    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControl + " " + (hasError ? style.error: "")}>
           <div> {/* в текстареа деструктуризируем инпут и пропсы */}
            <textarea {...input} {...props} />
            </div>
           { hasError && <span className={style.error}>{meta.error}!</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {//выводим из пропсов инрут и мету
   
    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControl + " " + (hasError ? style.error: "")}>
           <div> {/* в текстареа деструктуризируем инпут и пропсы */}
            <input {...input} {...props} />
            </div>
           { hasError && <span className={style.error}>{meta.error}!</span> }
        </div>
    )
}
