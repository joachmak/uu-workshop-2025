export default function Video() {
    return (
        <section>
            <video width="600" src="videoUtenUndertekster.mov" controls className={"mx-auto"}>
                <track
                    label="English"
                    kind="subtitles"
                    srcLang="en"
                    src="video-captions.vtt"
                    default
                />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}