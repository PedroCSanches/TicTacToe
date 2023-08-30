"use client"
import styles from './globals.module.css'
import { useState } from "react"


export default function Home() {
    const[values, setValues] = useState<string[][]>([[],[],[]])
    const[lastValue, setLastValue] = useState("")

  function setvalue(row:number, col:number) {
    if(values[row][col]) return
    values[row][col] = lastValue == "X" ? "O" : "X"
    setLastValue(values[row][col])
    setValues(values)
  }
  return (
    <main className={styles.main}>
      
      <div>

        <div className={styles.boxRow}>
            
            <button onClick={() => setvalue(0,0)} className={styles.box}>{values[0][0]}</button>
            <button onClick={() => setvalue(0,1)} className={styles.box}>{values[0][1]}</button>
            <button onClick={() => setvalue(0,2)} className={styles.box}>{values[0][2]}</button>
            
        </div>

        <div className={styles.boxRow}>
            <button onClick={() => setvalue(1,0)} className={styles.box}>{values[1][0]}</button>
            <button onClick={() => setvalue(1,1)} className={styles.box}>{values[1][1]}</button>
            <button onClick={() => setvalue(1,2)} className={styles.box}>{values[1][2]}</button>
        </div>
        
        <div className={styles.boxRow}>
            <button onClick={() => setvalue(2,0)} className={styles.box}>{values[2][0]}</button>
            <button onClick={() => setvalue(2,1)} className={styles.box}>{values[2][1]}</button>
            <button onClick={() => setvalue(2,2)} className={styles.box}>{values[2][2]}</button>
        </div>

      </div>

    </main>
  )
}
