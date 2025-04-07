import { SocialIcon } from "react-social-icons"

const SocialLinks = ({ sizeClass = '!w-6 !h-6' }) => {

    const socialIconClass = `transform hover:scale-105 transition-all duration-200 ${sizeClass}`

    return (
        <div className="flex flex-wrap justify-center gap-4">
              <SocialIcon url="https://www.instagram.com/petcare.by.phyllis?igsh=cTluenNnYjloNmo4&utm_source=qr"
                className={ `${socialIconClass}` }
                target="_blank"
                rel="noopener noreferrer" />
              <SocialIcon url="https://www.threads.net/@petcare.by.phyllis?igshid=NTc4MTIwNjQ2YQ=="
                className={ `${socialIconClass}` }
                target="_blank"
                rel="noopener noreferrer" />
              <SocialIcon url="https://www.facebook.com/share/18wX1iiHpt/?mibextid=wwXIfr"
                className={ `${socialIconClass}` }
                target="_blank"
                rel="noopener noreferrer" />
              <SocialIcon url="https://g.co/kgs/ztSSqim"
                network='google'
                className={ `${socialIconClass}` }
                target="_blank"
                rel="noopener noreferrer" />
              <SocialIcon url="https://wa.me/27723408784"
                className={ `${socialIconClass}` }
                network='whatsapp'
                target="_blank"
                rel="noopener noreferrer" />
            </div>
    )

}

export default SocialLinks;