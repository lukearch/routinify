import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.lucaslarangeira.routinify",
  appName: "Routinify",
  webDir: "www",
  server: {
    androidScheme: "https"
  }
};

export default config;
