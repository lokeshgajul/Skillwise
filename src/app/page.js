import ProtectedRoute from "./components/protectedroute/page";

export default function Home() {
  return (
    <div className=" rounded-xl">
      <ProtectedRoute />
    </div>
  );
}
