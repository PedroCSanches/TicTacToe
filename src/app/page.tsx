"use client"
import styles from './globals.module.css'
import { useState } from "react"


export default function Home() {
    const[values, setValues] = useState<string[][]>([[],[],[]])
    const[lastValue, setLastValue] = useState("")

    const[winner, setWinner] = useState("")

  function setvalue(row:number, col:number) {
    if(winner != "" || values[row][col]) return 
    values[row][col] = lastValue == "X" ? "O" : "X"
    setLastValue(values[row][col])
    setValues(values)
    if (verifyWinner()) {
      setWinner(values[row][col])
    }
  }

  function verifyWinner():boolean {
    

    if(values[0][0] != undefined && values[0][0] == values[0][1] != undefined && values[0][1] && values[0][1] === values[0][2] && values[0][2] != undefined) {
      console.log("1")
      return true}

    if(values[1][0] != undefined && values[1][0] == values[1][1]!= undefined && values[1][1] && values[1][1] == values[1][2] && values[1][2] != undefined) {
      console.log("2")
      return true}

    if(values[2][0] != undefined && values[2][0] == values[2][1]!= undefined && values[2][1] && values[2][1] == values[2][2] && values[2][2] != undefined) {
      console.log("3")
      return true}

    if(values[0][0] != undefined && values[0][0] == values[1][0]!= undefined && values[1][0] && values[1][0] == values[2][0] && values[2][0] != undefined){
      console.log("4")
      return true}

    if(values[0][1] != undefined && values[0][1] == values[1][1]!= undefined && values[1][1] && values[1][1] == values[2][1] && values[2][1] != undefined){
      console.log("5")
      return true}
 
    if(values[0][2] != undefined && values[0][2] == values[1][2]!= undefined && values[1][2] && values[1][2] == values[2][2] && values[2][2] != undefined){
      console.log("6")
      return true}
 
    if(values[0][0] != undefined && values[0][0] == values[1][1]!= undefined && values[1][1] && values[1][1] == values[2][2] && values[2][2] != undefined){
      console.log("7")
      return true}

    if(values[0][2] != undefined && values[0][2] == values[1][1]!= undefined && values[1][1] && values[1][1] == values[2][0] && values[2][0] != undefined){
      console.log("8")
      return true}

    return false
  }


  return (
    <main className={styles.main}>
      {winner && <div>
        {winner} Ganhou!
      </div>}
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
