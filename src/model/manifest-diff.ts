import Manifest from './manifest';
import * as jsondiffpatch from 'jsondiffpatch';

export class ManifestDiff {
  static build(originalManifest: Manifest, newManifest: Manifest) {
    return jsondiffpatch.diff(originalManifest, newManifest);
  }
}
