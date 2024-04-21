import { OrganizationProfile } from '@clerk/nextjs';

export default function SettingsPage() {
  return (
    <div className='w-full'>
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: 'none',
              width: '100%',
            },
            card: {
              width: '100%',
              boxShadow: 'none',
              border: '1px solid #e5e5e5',
            },
          },
        }}
      />
    </div>
  );
}
