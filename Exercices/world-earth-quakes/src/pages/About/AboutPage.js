import React from "react";
import './About.css'

const AboutPage = () => {
    const imgUrl = "https://scontent.fomr1-1.fna.fbcdn.net/v/t39.30808-6/271859451_4752603274787768_4062397513492496959_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wXtxlMmekigAX9TYzC8&_nc_ht=scontent.fomr1-1.fna&oh=00_AT_gVKQU_wk0qNYzm4cCRFSz4cp6cMIgAQXAGERB2hG5xg&oe=6303C4CB";
    const descrption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec bibendum arcu. Praesent tempus blandit tellus nec venenatis. Duis eu nisl et sapien ornare elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget felis eget dui pulvinar tempus. Vivamus efficitur venenatis odio ultricies bibendum. Etiam nisl turpis, tincidunt ac mi et, elementum commodo nisi. Sed sit amet laoreet sapien. Ut vitae massa lacus. Curabitur vel orci egestas, posuere lacus nec, elementum urna. Praesent sed iaculis nisl. Donec non rutrum massa. Nulla molestie elementum neque, eu luctus diam hendrerit ut. Maecenas sodales erat sed vehicula vehicula. Nullam aliquam mi eget consectetur suscipit. Nulla tincidunt nulla eget velit fringilla feugiat."
    return (
        <div className="container bg-light m-5">
            <h1 className="h1 my-4">About</h1>

            <div className="row">
                <div className="col">
                    <img className="img-fluid rounded-3" src={imgUrl} alt="" />
                </div>
                <div className="col-10 m-3">
                    <ul className="list-group">
                        <li className="list-group-item"><b>Name:</b> Gheran Andreea</li>
                        <li className="list-group-item "><b>Age:</b> 28</li>
                        <li className="list-group-item"><b>Contact:</b> andreea.gheran94@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className="m-4">{descrption}</div>
        </div>


    )
}

export default AboutPage