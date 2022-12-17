import GlassButton from "../components/Buttons/GlassButton";
import SkillButtons from "../components/Buttons/SkillButton";
import Layout from "../components/Layout/Layout";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <SafeHydrate>
        <Layout>
          <GlassButton />
        </Layout>
      </SafeHydrate>
    </>
  );
}

export default HomePage;
