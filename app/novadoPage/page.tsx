"use client";
import { useState } from "react";
import styles from "./page.module.css";



export default () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);



    /*
       const [showDiv, setShowDiv] = useState(true);
   
   
      
   დროებით თუ საჭიროება მოითხოვს!!!
       
       const toggleDiv = () => {
           setShowDiv(!showDiv)
       }
   */


    const hendleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);

    }
    const addTask = () => {
        if (task.trim() !== "") {
            const newTask = {
                id: Date.now(),
                text: task,
                completed: false,
            }
            setTasks([...tasks, newTask]);
            setTask("");
        }
    }

    const toogleTaskFinished = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task

        ));
    };


    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter((t) => t.id !== id))
    }

    const completedCount = tasks.filter(task => task.completed).length;

    return (
        <div className={styles.NovadoContainer}>
            <div className={styles.firstDiv}>
                <img src="/novadoIcon/Logo.svg" alt="Novado logo" />
            </div>

            <div className={styles.secDiv}>
                <div className={styles.inputContainer}>
                    <input type="text"
                        placeholder="ცხოვრების რა ნაწილის დაგეგმვა გსურს?"
                        onChange={hendleInputChange}
                        value={task}
                    />

                    <button
                        onClick={addTask}
                    >დამატება
                        <img src="/novadoIcon/plus.svg" />
                    </button>
                </div>


                <div className={styles.ListsContaner}>
                    <div className={styles.tasksContainer}>
                        <div className={styles.tasksNumbers}>
                            <p className={styles.taskParagraph}>დავალებები</p>
                            <div className={styles.tasksNumbersCount}>{tasks.length}</div>
                        </div>
                        <div className={styles.tasksNumbers}>
                            <p className={styles.taskParagraphSec}>დასრულებული</p>
                            <div className={styles.tasksNumbersCount}>
                                {completedCount} / {tasks.length}
                            </div>
                        </div>
                    </div>


                    <>
                        {


                            tasks.map(task => <ul className={styles.ulTaskList} key={task.id}>
                                <li className={task.completed ? styles.finishedText : ""}>
                                    <div className={styles.liDivContainer}>
                                        
                                        <div className={styles.radioContainer}>
                                        
                                        <input type="checkbox"
                                            onChange={() => toogleTaskFinished(task.id)}
                                            checked={task.completed}
                                            className={styles.Checkbox}
                                            
                                        />
                                       
                                            <span >{task.text}</span>
                                        </div>
                                        <img src="/novadoIcon/Layer2.svg" alt="Layer icon"
                                            onClick={() => handleDeleteTask(task.id)}
                                        />
                                    </div>
                                </li>
                            </ul>)}
                    </>


                    {tasks.length === 0 && (
                        <div className={styles.taskAparanceContainer}>


                            <div className={styles.tasksClipboard}>
                                <img src="/novadoIcon/Clipboard.svg" alt="Clipboard Icon" />
                            </div>
                            <div className={styles.tasksNotification}>
                                <div className={styles.tasksNotificationText}>

                                    <p>დავალებები ჯერ არ გაქვთ</p>

                                    <p>შექმენით დავალებები და დაიწყეთ თქვენი ცხოვრების დაორგანიზება
                                        ჩვენთან ერთად</p>


                                </div>

                            </div>


                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}