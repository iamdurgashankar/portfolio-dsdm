import React, { useEffect, useState } from 'react'
import right_arrow_white from '../assets/right-arrow-white.png'

const Contact = () => {
    const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
      if (!hCaptcha) {
        event.preventDefault();
        setResult("Please fill out captcha field");
        return
    };
    setResult("Sending....");
    const formData = new FormData(event.target);

  // ----- Enter your Web3 Forms Access key below---------

    formData.append("access_key", "b75859c8-d2f8-40a7-ae92-54a0c5c0cc4a");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };

  function CaptchaLoader() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (captchadiv.length) {
      let lang = null;
      let onload = null;
      let render = null;

      captchadiv.forEach(function (item) {
        const sitekey = item.dataset.sitekey;
        lang = item.dataset.lang;
        onload = item.dataset.onload;
        render = item.dataset.render;

        if (!sitekey) {
          item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
        }
      });

      let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
      if (lang) {
        scriptSrc += `&hl=${lang}`;
      }
      if (onload) {
        scriptSrc += `&onload=${onload}`;
      }
      if (render) {
        scriptSrc += `&render=${render}`;
      }

      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = scriptSrc;
      document.body.appendChild(script);
    }
  }

  useEffect(() => {
    CaptchaLoader();
  }, []);
  return (
    <div id="contact" className="w-full px-[12%] py-16 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

    <div className="text-center mb-16">
        <h4 className="text-lg font-Ovo text-gray-600 dark:text-gray-300 mb-3">Connect with me</h4>
        <h2 className="text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white mb-6">Get in touch</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-Ovo">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
    </div>

    <form onSubmit={onSubmit} className="max-w-3xl mx-auto bg-white dark:bg-gray-800/50 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">

    <input type="hidden" name="subject" value="Durga Shankar Das Mangaraj - New form Submission"/>
    <input type="hidden" name="to" value="dsdm0012@gmail.com"/>
    <input type="hidden" name="from_name" value="Portfolio Contact Form"/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                <input type="text" placeholder="Enter your name" className="w-full p-4 outline-none border-2 border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" required name="name"/>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full p-4 outline-none border-2 border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" required name="email"/>
            </div>
        </div>
        
        <div className="space-y-2 mb-8">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea rows="6" placeholder="Enter your message" className="w-full p-4 outline-none border-2 border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none" required name="message"></textarea>
        </div>
        
        <div className="flex justify-center mb-8">
            <div className="h-captcha" data-captcha="true"></div>
        </div>
        
        <div className="text-center">
            <button type='submit' className="py-4 px-10 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mx-auto hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg">
                Submit now
                <img src={right_arrow_white} alt="" className="w-5 h-5"/>
            </button>
            {result && (
                <p className={`mt-6 text-center font-medium ${
                    result.includes('Success') || result.includes('Thank') 
                        ? 'text-green-600 dark:text-green-400' 
                        : result.includes('Sending') 
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-red-600 dark:text-red-400'
                }`}>
                    {result}
                </p>
            )}
        </div>
    </form>
 </div>
  )
}

export default Contact
