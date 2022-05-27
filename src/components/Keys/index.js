/* eslint-disable no-eval */
import { Button } from "@chakra-ui/react";
import React from "react";


const Keys = ({name, width, text, setResult, result}) => {
    return (
        <Button w={`${width}px`} height={20} m={2} name={name} onClick={((e) => {
            if (name !== "Clear" || "C" || "=") setResult(result.concat(e.target.name))
            if (name === "C") setResult(result.slice(0, -1))
            if (name === "=") {
               try {
                 setResult(eval(result).toString())
               }
               catch {
                    setResult('Error')
               }
            }
            if (name === "Clear") setResult('')
        })}>{text}</Button>
    )
}

export default Keys;