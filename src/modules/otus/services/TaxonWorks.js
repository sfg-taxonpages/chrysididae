import { makeAPIRequest } from "@/utils/request"

export default class TaxonWorks {

  static getTaxonNameCitations (otuId) {
    return makeAPIRequest.get(`/otus/${otuId}/inventory/nomenclature_citations`, { params: { extend: ['source'] } })
  }

  static getOtu (id) {
    return makeAPIRequest.get(`/otus/${id}`, { params: { extend: ['parents'] } })
  }

  static getTaxon (id) {
    return makeAPIRequest.get(`/taxon_names/${id}`)
  }

  static summary (id) {
    return makeAPIRequest.get(`/taxon_names/${id}/inventory/summary`)
  }

  static getTaxonTypeDesignation (id) {
    return makeAPIRequest.get(`/taxon_names/${id}`, { params: { extend: ['type_taxon_name_relationship'] } })
  }

  static getOtuImages (otuId, params = {}) {
    return makeAPIRequest.get(`/otus/${otuId}/inventory/images.json`, { params })
  }

  static getOtuDescendants (otuId, params) {
    return makeAPIRequest.get(`/otus/${otuId}/inventory/taxonomy.json`, { params })
  }

  static getOtuTypeMaterial (otuId) {
    return makeAPIRequest.get(`/otus/${otuId}/inventory/type_material.json`)
  }

  static getOtuDistribution (otuId) {
    return makeAPIRequest.get(`/otus/${otuId}/inventory/distribution`)
  }

  static getOtuContent (otuId) {
    return makeAPIRequest.get(`/otus/${otuId}/inventory/content`, { extend: ['depiction']})
  }
}