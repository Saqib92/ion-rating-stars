import type { ComponentInterface } from '../../stencil-public-runtime';
import type { SpinnerTypes } from '../../interface';
import type { IonicSafeString } from '../../utils/sanitization';
export declare class RefresherContent implements ComponentInterface {
  private customHTMLEnabled;
  el: HTMLIonRefresherContentElement;
  /**
   * A static icon or a spinner to display when you begin to pull down.
   * A spinner name can be provided to gradually show tick marks
   * when pulling down on iOS devices.
   */
  pullingIcon?: SpinnerTypes | string | null;
  /**
   * The text you want to display when you begin to pull down.
   * `pullingText` can accept either plaintext or HTML as a string.
   * To display characters normally reserved for HTML, they
   * must be escaped. For example `<Ionic>` would become
   * `&lt;Ionic&gt;`
   *
   * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
   *
   * This property accepts custom HTML as a string.
   * Developers who only want to pass plain text
   * can disable the custom HTML functionality
   * by setting `innerHTMLTemplatesEnabled: false` in the Ionic config.
   */
  pullingText?: string | IonicSafeString;
  /**
   * An animated SVG spinner that shows when refreshing begins
   */
  refreshingSpinner?: SpinnerTypes | null;
  /**
   * The text you want to display when performing a refresh.
   * `refreshingText` can accept either plaintext or HTML as a string.
   * To display characters normally reserved for HTML, they
   * must be escaped. For example `<Ionic>` would become
   * `&lt;Ionic&gt;`
   *
   * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
   *
   * This property accepts custom HTML as a string.
   * Developers who only want to pass plain text
   * can disable the custom HTML functionality
   * by setting `innerHTMLTemplatesEnabled: false` in the Ionic config.
   */
  refreshingText?: string | IonicSafeString;
  componentWillLoad(): void;
  private renderPullingText;
  private renderRefreshingText;
  render(): any;
}
