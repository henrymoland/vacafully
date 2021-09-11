function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Vacafully works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Vacafully Plus</p>
      </div>

      <div className="space-y-4">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>referrals accepted</p>
        <p>Checkout my portfolio</p>
      </div>

      <div className="space-y-4">
        <h5 className="font-bold">HOST</h5>
        <p>Host your home</p>
        <p>Host an online experience</p>
        <p>Host an experience</p>
        <p>Resource Center</p>
      </div>

      <div className="space-y-4">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Contact Us</p>
        <p>Neighborhood Support</p>
      </div>
    </div>
  );
}

export default Footer;
