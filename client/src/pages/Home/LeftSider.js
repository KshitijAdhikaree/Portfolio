import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-1 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 text-xl sm:flex-row">
          <a href="https://github.com/KshitijAdhikaree">
            <i class="ri-github-fill text-gray-400 "></i>
          </a>

          <a href="https://www.linkedin.com/in/kshitij-adhikaree-43771a1ab">
            <i class="ri-linkedin-fill text-gray-400 "></i>
          </a>

          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=adhikareekshitij@gmail.com">
            <i class="ri-mail-send-fill text-gray-400 "></i>
          </a>

          <a href="https://www.facebook.com/adhikareekshitij">
            <i class="ri-facebook-fill text-gray-400 "></i>
          </a>

          <a href="https://www.instagram.com/kshitij_adhikaree">
            <i class="ri-instagram-fill text-gray-400 "></i>
          </a>

          <a href="https://www.youtube.com/@kshitijadhikaree9975">
            <i class="ri-youtube-fill text-gray-400 "></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-fourth sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
