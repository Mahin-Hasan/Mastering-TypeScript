
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

import { ReactNode } from "react";

type PropTypes ={
    heading:string;
    count:number;
    children: ReactNode;
}
const Box = ({heading,count,children}: PropTypes) => {
    return (
        <div>
            <h1>{heading}</h1>
            <p>{count}</p>
            {children}
        </div>
    );
};
// const Box = ({heading}:{heading:string}) => {
//     return (
//         <div>
//             <h1>{heading}</h1>
//         </div>
//     );
// };

export default Box;