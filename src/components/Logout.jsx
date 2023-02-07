
export default function Logout({ setUser }) {
    return (
        <div>
            <button className="logout" onClick={() => {setUser(); sessionStorage.removeItem("user")}} type="primary" size="large">
                Logout
            </button>
        </div>
    );
}