import React from 'react'

export default function faq() {
  return (
    <>
              <h1 className='font-luckiest text-[3rem] md:text-[6rem] text-[--bg-li] mb-10'>
            Curious Minds
          </h1>
          <div className="collapse collapse-arrow bg-[--bg-intro] mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-luckiest">
              How can I place an order?
            </div>
            <div className="collapse-content text-lg font-bold">
              <p>To place an order, simply browse our products, select the items you wish to purchase, and proceed to the checkout page. Follow the steps to provide your shipping and payment information, and confirm your order.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-[--bg-intro] mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-luckiest">
              What payment methods do you accept?
            </div>
            <div className="collapse-content text-lg font-bold">
              <p>We accept various payment methods, including credit/debit cards, JazzCash, and bank transfers. You can choose your preferred payment option during the checkout process.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-[--bg-intro] mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-luckiest">
              How long will it take to receive my order?
            </div>
            <div className="collapse-content text-lg font-bold">
              <p>The delivery time depends on your location and the shipping method you choose. Typically, orders are delivered within 2-3 business days.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-[--bg-intro] mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-luckiest">
              What&apos;s the return policy?
            </div>

            <div className="collapse-content text-lg font-bold">
              <p>We offer a hassle-free return policy. If you are not satisfied with your purchase, you can initiate a return within 7 days of receiving the product. Please refer to our Returns & Refunds page for detailed instructions.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-[--bg-intro] mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-luckiest">
              How secure is my data?
            </div>
            <div className="collapse-content text-lg font-bold">
              <p>We value your data&apos;s privacy and employ top-notch security measures to protect it.</p>
            </div>
          </div>
    </>
  )
}

 faq