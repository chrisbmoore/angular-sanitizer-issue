import { Pipe, PipeTransform, SecurityContext, Sanitizer } from '@angular/core';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: Sanitizer) { }

  transform(value: string, ...args: unknown[]): unknown {
    return this.sanitizer.sanitize(SecurityContext.HTML, value);
  }

}
