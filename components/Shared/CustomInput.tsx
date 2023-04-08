import React from "react";
import { CustomInputProps } from "@/interfaces";

export default function CustomInput(props: CustomInputProps) {
   const styles = {
      msgErrorClass: "text-rose-400",
      errorClass: `${props.className} text-rose-500`,
      parentClass: props.parentClass ? props.parentClass : "block relative"
   };

   return (
      <React.Fragment>
         <div className={styles.parentClass}>
            <input
               type={props.type}
               name={props.name}
               placeholder={props.placeholder}
               value={props.value}
               id={props.id}
               maxLength={props.type != "number" ? props.maxLength : undefined}
               minLength={props.type != "number" ? props.minLength : undefined}
               min={props.type === "number" ? props.min : undefined}
               max={props.type === "number" ? props.max : undefined}
               required={props.required}
               className={props.error ? styles.errorClass : props.className}
               onChange={props.handleChange}
               onFocus={props.handleFocus}
               onInput={props.handleInput}
               onBlur={props.handleBlur}
               onKeyDown={props.handleKeyDown}
            />
            {props.icon && (
               <label htmlFor={props.id} className={props.iconClass}>
                  <i className={props.icon}></i>
               </label>
            )}
         </div>
         {props.error?.error && <span className={styles.msgErrorClass}>{props.error.message}</span>}
      </React.Fragment>
   );
}

// CustomInput.defaultProps = {
//    parentClass: "",
//    icon: "",
//    className: "pr-8",
//    iconPosition: "right-0"
// };
