import React, {useState} from "react";

export default function useOffset() {
    const [offset, setOffset] = useState(0);
    
    return [offset, setOffset];
}