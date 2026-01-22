import { memo, useRef, useState } from "react";

interface Props {
    id: number;
    index: number;
    text: string;
    remove: (id: number) => void;
    edit: (id: number, text: string) => void;
}

const Task = ({ id, index, text, remove, edit }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const textRef = useRef<HTMLTextAreaElement>(null);

    console.log(`Task rendered: ${text}, index: ${index}`);

    const handleEdit = () => setIsEditing(true);
    const handleRemove = () => remove(id);
    const handleSave = () => {
        edit(id, textRef.current!.value);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div className="box">
                <textarea ref={textRef} defaultValue={text}></textarea>
                <button onClick={handleSave} className="btn success">Save</button>
            </div>
        );
    }

    return (
        <div className="box">
            <div>{text}</div>
            <button onClick={handleEdit} className="btn light">Edit</button>
            <button onClick={handleRemove} className="btn red">Remove</button>
        </div>
    );
}

export default memo(Task);
