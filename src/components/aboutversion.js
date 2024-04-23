import React from 'react';
import '../index.css';
import aboutImage from '../images/aboutimage.png';
import LoginForm from './loginform'; // Import LoginForm component

const AboutPage = () => {
  return (
    <div>
      <div className='custom-page-container'>
        <div className='custom-text-container'>
          <div className='custom-image-container animated-image'>
            <img src={aboutImage} alt='About' className='custom-image' />
          </div>
          <div className='custom-paragraph animated-text'>
            <h1 className='custom-about'>Hakkımda</h1>
            <p>
              Web geliştirme konusunda deneyimli bir yazılımcıyım ve çeşitli
              modern teknolojilerle çalışıyorum. Özellikle React.js, Next.js,
              JavaScript, TypeScript, HTML, CSS, Bootstrap ve Redux gibi
              araçları kullanarak, kullanıcı dostu ve etkileyici web
              uygulamaları oluşturmayı seviyorum. GitHub üzerinde projelerimi
              yönetirken ve Figma gibi tasarım araçlarıyla kullanıcı
              arayüzlerini tasarlarken deneyim kazanıyorum. Yazılım dünyasında
              kendimi sürekli geliştirmeye odaklıyım ve yeni teknolojilere
              açığım
            </p>
          </div>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default AboutPage;
