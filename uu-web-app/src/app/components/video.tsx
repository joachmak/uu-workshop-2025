export default function Video() {
    return (
        <div>
            <video width="600" src="videoUtenUndertekster.mov" controls className={"mx-auto"}>
                {/* TODO: add <track> for captions */}
                Your browser does not support the video tag.
            </video>
        </div>
    )
}