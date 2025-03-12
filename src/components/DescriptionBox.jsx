import React from "react";

function DescriptionBox() {
  return (
    <div className="lg:mx-[170px] my-[120px]">
      <div className="flex">
        <div className="flex items-center justify-center text-xl font-semibold w-[171px] h-[70px] border border-#d0d0d0">
          Description
        </div>
        <div className="flex items-center justify-center text-xl font-semibold w-[171px] h-[70px] border border-#d0d0d0 bg-[#fbfbfb] text-[#555]">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-[25px] border border-[#d0d0d0] p-[48px] pb-[70px]">
        <p>
          An e-commerce website in an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where business and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global react they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices and any available variations
          (e.g., size, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
