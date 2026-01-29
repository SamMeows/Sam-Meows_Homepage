import { useEffect, useState } from 'react';
import Head from 'next/head';

const ANDROID_STORE_URL = 'https://play.google.com/store/apps/details?id=com.sammeows.ritty';
const IOS_STORE_URL = 'https://apps.apple.com/us/app/id6743311040';

export default function Landing() {
  const [deviceType, setDeviceType] = useState<'android' | 'ios' | 'desktop' | null>(null);

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
      
      // Android detection
      if (/android/i.test(userAgent)) {
        setDeviceType('android');
        window.location.href = ANDROID_STORE_URL;
        return;
      }
      
      // iOS detection (iPhone, iPad, iPod)
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream) {
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
          <title>Ritty - Your Virtual Pet Companion | SamMeows</title>
          <meta name="description" content="Download Ritty, your own virtual pet that chats, cares, and grows with you every day. Available on Android and iOS." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sam-meows.com/landing" />
          <meta property="og:title" content="Ritty - Your Virtual Pet Companion | SamMeows" />
          <meta property="og:description" content="Download Ritty, your own virtual pet that chats, cares, and grows with you every day. Available on Android and iOS." />
          <meta property="og:image" content="https://sam-meows.com/og-image.png" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ritty - Your Virtual Pet Companion | SamMeows" />
          <meta name="twitter:description" content="Download Ritty, your own virtual pet that chats, cares, and grows with you every day. Available on Android and iOS." />
          <meta name="twitter:image" content="https://sam-meows.com/og-image.png" />
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
          <title>Ritty - Your Virtual Pet Companion | SamMeows</title>
          <meta name="description" content="Download Ritty, your own virtual pet that chats, cares, and grows with you every day. Available on Android and iOS." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sam-meows.com/landing" />
          <meta property="og:title" content="Ritty - Your Virtual Pet Companion | SamMeows" />
          <meta property="og:description" content="Download Ritty, your own virtual pet that chats, cares, and grows with you every day. Available on Android and iOS." />
          <meta property="og:image" content="https://sam-meows.com/og-image.png" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ritty - Your Virtual Pet Companion | SamMeows" />
          <meta name="twitter:description" content="Download Ritty, your own virtual pet that chats, cares, and grows with you every day. Available on Android and iOS." />
          <meta name="twitter:image" content="https://sam-meows.com/og-image.png" />
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