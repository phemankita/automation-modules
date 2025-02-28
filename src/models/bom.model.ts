import React from 'react';

export interface BomModel {
  name: string
  path: string
  cloudProvider: string
  bomModules: string[]
}

export const bomCloudProvider = (bom: BomModel): string => {
  return bom.cloudProvider
}

export const bomPath = (bom: BomModel): string => {
  return bom.path
}

export const bomName = (bom: BomModel): string => {
  return bom.name
}

export let bomModulesList = (bom: BomModel): string[] => {
  return bom.bomModules
}
