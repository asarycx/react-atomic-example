export default {
    card_info: {
        title: "Sample Login",
        subtitle: "Subtitle Login",
        image: "https://image.freepik.com/free-photo/young-happy-man-showing-thumbs-up_171337-1130.jpg",
        align: "left",
    },
    credentials: {
        username: "test",
        password: "despacito"
    },
    changeValue: (e) => alert(`${e.target.name} - ${e.target.value}`),
    submitForm: (e) => {
        e.preventDefault();
        alert("submitted");
    },
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, at sequi iure debitis voluptas quos. Repudiandae, laudantium? Voluptates sapiente, quibusdam architecto nostrum reprehenderit ipsam, facilis, inventore nisi quam eveniet nobis!"
}