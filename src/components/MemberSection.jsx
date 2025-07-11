import { useNavigate } from "react-router-dom";

function MemberSection() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/layanan");
    };

    // Ganti baseUrl dengan PUBLIC_URL
    const baseUrl = process.env.PUBLIC_URL;

    return (
        <section
            className="relative w-full h-[200px] md:h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url('${baseUrl}/member.png')` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent flex items-center">
                <div className="text-left text-white px-4 md:px-10 lg:px-40 max-w-full md:max-w-2xl">
                    <h2 className="text-lg md:text-5xl font-extrabold mb-1 md:mb-4">
                        Membership
                    </h2>
                    <p className="text-xs md:text-2xl mb-1 md:mb-8">
                        Dapatkan diskon hingga 40% untuk pengguna baru
                    </p>
                    <button
                        onClick={handleClick}
                        className="bg-[#E36CC5] hover:bg-pink-400 text-white font-bold py-1 px-4 md:py-3 md:px-8 rounded-full text-xs md:text-lg"
                    >
                        Daftar Member
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MemberSection;
