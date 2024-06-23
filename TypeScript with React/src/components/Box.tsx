
//another method
// type PropTypes ={
//     heading:string;
// }
// const Box = (props: PropTypes) => {
//     return (
//         <div>
//             <h1>{props.heading}</h1>
//         </div>
//     );
// };
//another type more standard

import { Dispatch, SetStateAction } from "react";

// import { ReactNode } from "react";

// type PropTypes ={
//     heading:string;
//     count?:number;
//     children: ReactNode;
// }
// const Box = ({heading,count=3,children}: PropTypes) => {
//     return (
//         <div>
//             <h1>{heading}</h1>
//            {
//             count && <p>{count}</p>
//            }
//             {children}
//         </div>
//     );
// };
// const Box = ({heading}:{heading:string}) => {
//     return (
//         <div>
//             <h1>{heading}</h1>
//         </div>
//     );
// };

//generics 3h 28m

type InputValType = string | number;

const Box = <T extends InputValType>({ label, value, setter }: {
    label: string;
    value: T;
    setter: Dispatch<SetStateAction<T>>;
}) => {
    return (
        <form>
            <label>{label}</label>
            <input
             type="text" 
             value={value}
              onChange={(e)=>setter(e.target.value as T)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Box;