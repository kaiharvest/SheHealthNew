function MemberSection() {
    return (
        <section
            className="relative w-full h-[400px] bg-cover bg-center"
            style={{ backgroundImage: "url('/member.png')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent flex items-center">
                <div className="text-left text-white max-w-2xl px-40">
                    <h2 className="text-5xl font-extrabold mb-4">Membership</h2>
                    <p className="text-2xl mb-2">Dapatkan diskon hingga 40% untuk pengguna baru</p>
                    <p className="text-lg mb-6">Yayayaya isi apaa kek aku dah gataulagi jir cape</p>
                    <button className="bg-[#E36CC5] hover:bg-pink-400 text-white font-bold py-3 px-8 rounded-full text-lg">
                        Daftar Member
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MemberSection;
