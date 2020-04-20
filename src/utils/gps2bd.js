
export const wgs2bd = {
  data(){
    return{
      pi: 3.14159265358979324,
      a: 6378245.0,
      ee: 0.00669342162296594323,
      x_pi: 3.14159265358979324*3000.0/180.0,
    }
  },
  methods:{
    //WGS84坐标系转为百度坐标系（BD-09）
    wgs2bd(lat,lon) {
      let wgs2gcjR = this.wgs2gcj(lat, lon);
      let gcj2bdR = this.gcj2bd(wgs2gcjR[0], wgs2gcjR[1]);
      return gcj2bdR;
    },
    //火星坐标系（GCJ-02）转为百度坐标系（BD-09)
     gcj2bd(lat,lon) {
      let x = lon, y = lat;
      let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.x_pi);
      let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.x_pi);
      let bd_lon = z * Math.cos(theta) + 0.0065;
      let bd_lat = z * Math.sin(theta) + 0.006;
      let result = [];
      result.push(bd_lat);
      result.push(bd_lon);
      return result;
    },
    //WGS84坐标系转为火星坐标系（GCJ-02）
     wgs2gcj(lat,lon) {
      let dLat = this.transformLat(lon - 105.0, lat - 35.0);
      let dLon = this.transformLon(lon - 105.0, lat - 35.0);
      let radLat = lat / 180.0 * this.pi;
      let magic = Math.sin(radLat);
      magic = 1 - this.ee * magic * magic;
      let sqrtMagic = Math.sqrt(magic);
      dLat = (dLat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtMagic) * this.pi);
      dLon = (dLon * 180.0) / (this.a / sqrtMagic * Math.cos(radLat) * this.pi);
      let mgLat = lat + dLat;
      let mgLon = lon + dLon;
      let result = [];
      result.push(mgLat);
      result.push(mgLon);
      return result;
    },
    //百度坐标系（BD-09)（GCJ-02）转为WGS84坐标系
    bd2wgs(lat, lon) {
      let gcj02 = this.bd2gcj(lat, lon);
      let gps84 = this.gcj2wgs(gcj02[0], gcj02[1]);
      let gpsLat = gps84[0].toFixed(10);
      let gpsLon = gps84[1].toFixed(10);
      let result = [];
      result.push(gpsLat);
      result.push(gpsLon);
      return result;
    },
    //百度坐标系（BD-09)（GCJ-02）转为火星坐标系
     bd2gcj(lat,lon) {
       let x = lon - 0.0065, y = lat - 0.006;
       let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_pi);
       let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_pi);
       let gg_lon = z * Math.cos(theta);
       let gg_lat = z * Math.sin(theta);
       let result = [];
      result.push(gg_lat);
      result.push(gg_lon);
      return result;
    },
    //火星坐标系（GCJ-02）转为 WGS84坐标系
    gcj2wgs(lat,lon) {
      let gps = this.transform(lat, lon);
      let lontitude = lon * 2 - gps[1];
      let latitude = lat * 2 - gps[0];
      let result = [];
      result.push(latitude);
      result.push(lontitude);
      return result;
    },
    transform(lat,lon)
    {
      let dLat =this.transformLat(lon - 105.0, lat - 35.0);
      let dLon =this.transformLon(lon - 105.0, lat - 35.0);
      let radLat = lat / 180.0 * this.pi;
      let magic = Math.sin(radLat);
      magic = 1 - this.ee * magic * magic;
      let SqrtMagic = Math.sqrt(magic);
      dLat = (dLat * 180.0) / ((this.a * (1 - this.ee)) / (magic * SqrtMagic) *this. pi);
      dLon = (dLon * 180.0) / (this.a / SqrtMagic * Math.cos(radLat) * this.pi);
      let mgLat = lat + dLat;
      let mgLon = lon + dLon;
      let result=[];
      result.push(mgLat);
      result.push(mgLon);
      return result;
    },
    transformLat(lat,lon) {
      let ret = -100.0 + 2.0 * lat + 3.0 * lon + 0.2 * lon * lon + 0.1 * lat * lon + 0.2 * Math.sqrt(Math.abs(lat));
      ret += (20.0 * Math.sin(6.0 * lat * this.pi) + 20.0 * Math.sin(2.0 * lat * this.pi)) * 2.0 / 3.0;
      ret += (20.0 * Math.sin(lon * this.pi) + 40.0 * Math.sin(lon / 3.0 * this.pi)) * 2.0 / 3.0;
      ret += (160.0 * Math.sin(lon / 12.0 * this.pi) + 320 * Math.sin(lon * this.pi  / 30.0)) * 2.0 / 3.0;
      return ret;
    },

     transformLon(lat,lon) {
      let ret = 300.0 + lat + 2.0 * lon + 0.1 * lat * lat + 0.1 * lat * lon + 0.1 * Math.sqrt(Math.abs(lat));
      ret += (20.0 * Math.sin(6.0 * lat * this.pi) + 20.0 * Math.sin(2.0 * lat * this.pi)) * 2.0 / 3.0;
      ret += (20.0 * Math.sin(lat * this.pi) + 40.0 * Math.sin(lat / 3.0 * this.pi)) * 2.0 / 3.0;
      ret += (150.0 * Math.sin(lat / 12.0 * this.pi) + 300.0 * Math.sin(lat / 30.0 * this.pi)) * 2.0 / 3.0;
      return ret;
    },
  }
};
