import { useEffect, useState } from 'react';
import Head from 'next/head';

const ANDROID_STORE_URL = 'https://play.google.com/store/apps/details?id=com.sammeows.ritty';
const IOS_STORE_URL = 'https://apps.apple.com/us/app/id6743311040';

export default function Landing() {
  const [deviceType, setDeviceType] = useState<'android' | 'ios' | 'desktop' | null>(null);

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      
      // Android detection
      if (/android/i.test(userAgent)) {
        setDeviceType('android');
        window.location.href = ANDROID_STORE_URL;
        return;
      }
      
      // iOS detection (iPhone, iPad, iPod)
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        setDeviceType('ios');
        window.location.href = IOS_STORE_URL;
        return;
      }
      
      // Desktop/other devices
      setDeviceType('desktop');
    };

    detectDevice();
  }, []);

  // Show loading while detecting device
  if (deviceType === null) {
    return (
      <>
        <Head>
          <title>Ritty 앱 다운로드</title>
          <meta name="description" content="Ritty 앱을 다운로드하세요" />
        </Head>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          fontFamily: 'Arial, sans-serif'
        }}>
          <div>앱 스토어로 이동 중...</div>
        </div>
      </>
    );
  }

  // Show desktop fallback with download links
  if (deviceType === 'desktop') {
    return (
      <>
        <Head>
          <title>Ritty 앱 다운로드</title>
          <meta name="description" content="Ritty 앱을 다운로드하세요" />
        </Head>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          fontFamily: 'Arial, sans-serif',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f5f5f5'
        }}>
          <h1 style={{ marginBottom: '30px', color: '#333' }}>Ritty 앱 다운로드</h1>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '500px',
            width: '100%'
          }}>
            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <strong>안드로이드 다운받기:</strong>
              <br />
              <a 
                href={ANDROID_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                  fontSize: '14px'
                }}
              >
                {ANDROID_STORE_URL}
              </a>
            </div>
            
            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <strong>아이폰 다운받기:</strong>
              <br />
              <a 
                href={IOS_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                  fontSize: '14px'
                }}
              >
                {IOS_STORE_URL}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  // This shouldn't be reached as mobile devices are redirected
  return null;
}