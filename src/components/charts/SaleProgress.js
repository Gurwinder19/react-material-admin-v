import React from 'react';
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";


function Example(props) {
    return (
        <div>{props.children}</div>
    );
}

export default function SaleProgress() {
    return (
        <div style={{width:"35%", margin:'0 auto'}}>
            <Example>
                
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={66}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    repeat={false}
                   >
                    {value => {
                        const roundedValue = Math.round(value);
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}

                                styles={buildStyles({ pathTransition: "none" })}
                            />
                        );
                    }}
                </AnimatedProgressProvider>
                
            </Example>
        </div>
    )
}
