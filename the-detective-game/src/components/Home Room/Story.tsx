type storyProp = {
    storyCase: string[]
    storyIndex: number
}

export function Story({storyCase, storyIndex}: storyProp) {
    return (
    <div className="story-div">
        <p className="story-text">{storyCase[storyIndex]}</p>
    </div>
    )
}