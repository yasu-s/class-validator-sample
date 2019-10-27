import { validateSync } from 'class-validator';

/**
 * エラー情報通知 ViewModel
 * @description
 * 以下のコードを移植 <br/>
 * https://github.com/yasu-s/WPF-Sample/blob/master/src/WPF-Sample/ViewModel/NotifyObject.cs
 */
export abstract class NotifyErrorInfoViewModel {
  /** 検証エラー情報 */
  protected readonly errors = new Map<string, string[]>();

  /** 検証エラーがあるかどうかを示す値を取得します。 */
  get hasErrors() {
    return this.errors.size > 0;
  }

  /**
   * 指定したプロパティの検証エラーを取得します。
   * @param propertyName 検証エラーを取得するプロパティ名
   * @returns プロパティの検証エラー。
   */
  getErrors(propertyName: string): string[] {
    const errors = this.errors.get(propertyName);
    return errors ? errors : [];
  }

  /**
   * プロパティ変更処理
   * @param propertyName プロパティ名
   */
  protected onPropertyChanged(propertyName: string): void {
    this.setErrors(propertyName);
  }

  /**
   * 指定したプロパティの検証エラーを設定します。
   * @param propertyName プロパティ名
   */
  protected setErrors(propertyName: string): void {
    const results = validateSync(this);
    const errorMsgs = results.filter((r) => r.property === propertyName).map((r) => Object.values(r.constraints));
    this.errors.set(propertyName, errorMsgs.length > 0 ? errorMsgs.reduce((prev, current) => prev.concat(current)) : []);
  }
}
