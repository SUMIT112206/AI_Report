import MedicalReportAnalyzer from "@/components/MedicalReportAnalyzer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Navbar />
      <MedicalReportAnalyzer />
    </main>
  );
}
