import profile from "./assets/profile.jpg"

export default function Info() {
    return (
        <header className="info">
            <img src={profile} alt="" />
            <div className="info-description">
                <h1>Sam Candela</h1>
                <p className="info-job">Frontend developer</p>
                <p className="info-website">samcandela.website</p>
                <button>
                    <i class="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </button>
            </div>
        </header>
    )
}