
import React from "react";

function Home() {
  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center text-center space-y-8 overflow-hidden">
        <div
          className="relative flex justify-center items-center"
          style={{ opacity: 1, borderRadius: "20%", transform: "none" }}
        >
          <div className="absolute border border-[#555555] rounded-full h-[200px] w-[200px] mt-48 animate-ping"></div>
          <div className="absolute border border-[#555555] rounded-full h-[300px] w-[300px] mt-48 animate-ping"></div>
          <div className="absolute border border-[#555555] rounded-full h-[500px] w-[500px] mt-48 animate-ping"></div>

          <div className="absolute border border-indigo-700 dark:border-[#ca3131] opacity-20 rounded-full h-[650px] w-[650px] mt-48 animate-pulse"></div>
          <div className="absolute border border-[#555555] rounded-full h-[800px] w-[800px] mt-48 animate-pulse"></div>
          <img src="https://media.licdn.com/dms/image/D4D03AQHAo04NJptUDw/profile-displayphoto-shrink_800_800/0/1693217261578?e=1698883200&v=beta&t=P0lbXT9IjSQ7HvOaz3_4y4IDRJqSclNDMcoM4jrHuBc" width={"130px"} height={"130px"} className="rounded-full" loading="lazy" style={{color:"transparent"}}/>
        </div>
      </div>
    </section>
  );
}
export default Home;
