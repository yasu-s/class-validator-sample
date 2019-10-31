import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent],
    });

    component = TestBed.get(AppComponent);
  });

  describe('should create', () => {
    it('ok', () => {
      expect(component).toBeDefined();
    });
  });

  describe('editData.name validate', () => {
    it('ok', () => {
      // exercise
      component.editData.name = '12345678901234567890';

      // verify
      expect(component.editData.hasErrors).toBeFalsy();
      expect(component.editData.getErrors('name').length).toBe(0);
    });

    it('empty', () => {
      // exercise
      component.editData.name = '';

      // verify
      expect(component.editData.hasErrors).toBeTruthy();
      expect(component.editData.getErrors('name').length).toBe(1);
      expect(component.editData.getErrors('name')[0]).toBe('name を入力してください。');
    });

    it('maxLength', () => {
      // exercise
      component.editData.name = '123456789012345678901';

      // verify
      expect(component.editData.hasErrors).toBeTruthy();
      expect(component.editData.getErrors('name').length).toBe(1);
      expect(component.editData.getErrors('name')[0]).toBe('name は 20文字以内で入力してください。');
    });
  });

  describe('editData.age validate', () => {
    it('ok', () => {
      // exercise
      component.editData.age = 20;

      // verify
      expect(component.editData.hasErrors).toBeFalsy();
      expect(component.editData.getErrors('age').length).toBe(0);
    });

    it('max', () => {
      // exercise
      component.editData.age = 100;

      // verify
      expect(component.editData.hasErrors).toBeTruthy();
      expect(component.editData.getErrors('age').length).toBe(1);
      expect(component.editData.getErrors('age')[0]).toBe('age は 10～99で入力してください。');
    });

    it('min', () => {
      // exercise
      component.editData.age = 9;

      // verify
      expect(component.editData.hasErrors).toBeTruthy();
      expect(component.editData.getErrors('age').length).toBe(1);
      expect(component.editData.getErrors('age')[0]).toBe('age は 10～99で入力してください。');
    });
  });
});
