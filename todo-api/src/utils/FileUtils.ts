import { realpathSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

/**
 * Calculate a filename in the temporary OS folder.
 *
 * @param prefix prefix for the calculated file name
 * @param ext file extension
 * @returns the fully-qualified temp file name
 */
export function calculateTempFileName(prefix: string, ext: string): string {
  const filename = `${prefix}_${Date.now()}.${ext}`;
  const dir = realpathSync(tmpdir());

  return join(dir, filename);
}
