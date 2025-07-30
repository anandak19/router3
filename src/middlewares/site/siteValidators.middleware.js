export const validateNewSite = (req, res, next) => {
  try {
    const {
      siteName,
      country,
      location,
      currency,
      dns,
      port,
      callerId = "",
      userName,
      password,
    } = req.body;

    // validations

    req.site = {
      siteName: siteName.trim(),
      country: country.trim(),
      location: location.trim(),
      currency: currency.trim(),
      dns: dns.trim(),
      port: Number(port),
      callerId,
      userName: userName.trim(),
      password: password,
    };

    return next();
  } catch (error) {
    next(error);
  }
};
