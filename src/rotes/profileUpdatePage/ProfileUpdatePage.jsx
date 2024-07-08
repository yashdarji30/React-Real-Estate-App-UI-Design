import "./profileUpdatePage.scss";

function profileUpdatePage() {
    <div className="profileupdatepage">
        <div className="formContainer">
            <form>
                <h1>update Profile</h1>
                <div className="item">
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" />

                </div>
                <div className="tem">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="text" />
                </div>
                <div className="tem">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                </div>
                <button>Update</button>
            </form>
            <div className="sideContainer">
                <img src="" alt="" className="avatar" />
            </div>
        </div>
    </div>
}
export default profileUpdatePage