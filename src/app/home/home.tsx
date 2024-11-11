import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/common/components/Container";
import FeedPage from "./feed/components/feedpage";

const Home = () => {
  return (
    <div className="flex flex-col bg-black text-white min-h-screen">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-grow">
        <Container>
          <div className="py-8">
            <FeedPage />
          </div>
        </Container>
      </main>
 </div>
  );
};

export default Home;
