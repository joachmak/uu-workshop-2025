export default function Video() {
    return (
        <div>
            <video width="600" src="videoUtenUndertekster.mov" controls className={"mx-auto"}>
                {/* hint hint: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track */}
                Your browser does not support the video tag.
            </video>
        </div>
    )
}