import style from "./Sidebar.module.scss"
import SidebarButton from "../UI/SidebarButton/SidebarButton";

const folders = [{text: "Design", count: 23}, {text: "Code Blocks", count: 15}, {
    text: "Drafts",
    count: 18
}, {text: "Peoples Review", count: 21}, {text: "Social", count: 43}, {text: "Labels", count: 36}, {
    text: "My notes",
    count: 29
},]
const labels = [{text: "Notes", color: "#33BFFF"}, {text: "Change Notes", color: "#FF6633"}, {
    text: "From Family", color: "#29CC39"
}, {text: "Imagium", color: "#8833FF"}, {text: "Work", color: "#C3CAD9"},]

const Sidebar = () => {
    return (<>
        <div className={style.content}>
            <div className={style.contentHead}>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M9 5C7.9 5 7.01 5.9 7.01 7L7 23C7 24.1 7.89 25 8.99 25H21C22.1 25 23 24.1 23 23V11.83C23 11.3 22.79 10.79 22.41 10.42L17.58 5.59C17.21 5.21 16.7 5 16.17 5H9ZM16 11V6.5L21.5 12H17C16.45 12 16 11.55 16 11Z"
                              fill="white" fillOpacity="0.5"/>
                    </svg>
                    <span>New Note</span>
                </button>
            </div>
            <div className={style.contentMenu}>
                <SidebarButton name={"All Notes"} count={43} isActive={true}/>
                {folders.map((folder) => {
                    return <SidebarButton name={folder.text} count={folder.count}/>
                })}
                <div className={style.btn}>
                    <AddButton text={"Add Folder"}/>
                </div>
            </div>
            <div className={style.labels}>
                Labels
                <div className={style.labelsList}>
                    {labels.map((label) => {
                        return <Label text={label.text} color={label.color}/>
                    })}
                    <AddButton text={"New Label"}/>
                </div>
            </div>

        </div>
    </>)
}

export default Sidebar

export const AddButton = ({text}) => {
    return (<button className={style.addFolder}>
        <div className={style.content}>
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 5C9.48 5 5 9.48 5 15C5 20.52 9.48 25 15 25C20.52 25 25 20.52 25 15C25 9.48 20.52 5 15 5ZM19 16H16V19C16 19.55 15.55 20 15 20C14.45 20 14 19.55 14 19V16H11C10.45 16 10 15.55 10 15C10 14.45 10.45 14 11 14H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11V14H19C19.55 14 20 14.45 20 15C20 15.55 19.55 16 19 16Z"
                    fill="#C3CAD9"
                />
            </svg>
            {text}
        </div>
    </button>)
}

export const Label = ({text, color}) => {
    return (<button className={style.notesLabel}>
            <svg
                className="action-label"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.63 8.84C20.27 8.33 19.67 8 19 8L8 8.01C6.9 8.01 6 8.9 6 10V20C6 21.1 6.9 21.99 8 21.99L19 22C19.67 22 20.27 21.67 20.63 21.16L24.59 15.58C24.84 15.23 24.84 14.77 24.59 14.42L20.63 8.84Z"
                    fill={color}
                />
            </svg>
            <div className="notes">{text}</div>
        </button>
    )
}