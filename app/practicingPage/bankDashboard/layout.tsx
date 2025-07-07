export default function DashboardLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    return(
        <div>
            <header>
                <p>there is heder!</p>
            </header>
            <main>
                <p>there is main</p>
            </main>
            <footer>
                <p>here is footer!</p>
            </footer>
        </div>
    );
}