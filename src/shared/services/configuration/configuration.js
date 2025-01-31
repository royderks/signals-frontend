import globalConfig from 'globalConfig'; // eslint-disable-line import/extensions, import/no-unresolved

const domainName = 'meldingen.amsterdam.nl';
const apiDomainName = 'api.data.amsterdam.nl';
const mapserverDomainName = 'map.data.amsterdam.nl';

export const OVL_KLOKKEN_LAYER = 'maps/openbare_verlichting?REQUEST=GetFeature&SERVICE=wfs&OUTPUTFORMAT=application/json;%20subtype=geojson;%20charset=utf-8&Typename=Klokken&version=1.1.0&srsname=urn:ogc:def:crs:EPSG::4326';
export const OVL_VERLICHTING_LAYER = 'maps/openbare_verlichting?REQUEST=GetFeature&SERVICE=wfs&OUTPUTFORMAT=application/json;%20subtype=geojson;%20charset=utf-8&Typename=Verlichting&version=1.1.0&srsname=urn:ogc:def:crs:EPSG::4326';

export class Configuration {
  constructor(host) {
    this.hostname = host || (window && window.location && window.location.hostname);
    this.config = {};
    this.setConfig();
    this.loadGlobalConfig();
  }

  setConfig() {
    let config;

    if (this.hostname === domainName) {
      config = {
        API_ROOT: `https://${apiDomainName}/`,
        ROOT: `https://${this.hostname}/`,
        AUTH_ROOT: `https://${apiDomainName}/`,
        API_ROOT_MLTOOL: `https://${apiDomainName}/`,
        API_ROOT_MAPSERVER: `https://${mapserverDomainName}/`,
      };
    } else if (this.hostname === `acc.${domainName}`) {
      config = {
        API_ROOT: `https://acc.${apiDomainName}/`,
        ROOT: `https://${this.hostname}/`,
        AUTH_ROOT: `https://acc.${apiDomainName}/`,
        API_ROOT_MLTOOL: `https://acc.${apiDomainName}/`,
        API_ROOT_MAPSERVER: `https://${mapserverDomainName}/`,
      };
    } else if (this.hostname === `opleiding.${domainName}`) {
      config = {
        API_ROOT: `https://api.opleiding.${domainName}/`,
        ROOT: `https://${this.hostname}/`,
        AUTH_ROOT: `https://acc.${apiDomainName}/`,
        API_ROOT_MLTOOL: `https://api.opleiding.${domainName}/`,
        API_ROOT_MAPSERVER: `https://${mapserverDomainName}/`,
      };
    } else {
      config = {
        API_ROOT: `https://acc.${apiDomainName}/`,
        ROOT: 'http://localhost:3001/',
        AUTH_ROOT: 'https://acc.api.data.amsterdam.nl/',
        API_ROOT_MLTOOL: `https://acc.${apiDomainName}/`,
        API_ROOT_MAPSERVER: `https://${mapserverDomainName}/`,
      };
    }

    this.config = config;
  }

  loadGlobalConfig() {
    /* istanbul ignore next */
    if (globalConfig) {
      this.config = {
        ...this.config,
        ...globalConfig
      };
    }
  }

  get API_ROOT() {
    return this.config.API_ROOT;
  }

  get ROOT() {
    return this.config.ROOT;
  }

  get AUTH_ROOT() {
    return this.config.AUTH_ROOT;
  }

  get API_ROOT_MLTOOL() {
    return this.config.API_ROOT_MLTOOL;
  }

  get API_ROOT_MAPSERVER() {
    return this.config.API_ROOT_MAPSERVER;
  }
}

const CONFIGURATION = new Configuration();

export default CONFIGURATION;
