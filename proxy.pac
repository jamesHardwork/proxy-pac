function FindProxyForURL(url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
 if (shExpMatch(host, "*.facebook.*"))
  {
    return "PROXY 10.0.1.1:8080";
  }

  return "DIRECT";
}
